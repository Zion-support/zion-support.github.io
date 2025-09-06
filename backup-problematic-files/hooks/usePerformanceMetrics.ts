<<<<<<< HEAD
<<<<<<< HEAD


export function usePerformanceMetrics() {;

=======

import { useEffect, useState } from "react";
import { PerformanceMetrics } from "../types";


=======
<<<<<<< HEAD:hooks/usePerformanceMetrics.ts
=======
:hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useState } from "react";
import { PerformanceMetrics } from "../types";

export function usePerformanceMetrics() {;
:backup-problematic-files/hooks/usePerformanceMetrics.ts
import { useEffect, useState } from 'react';
import { PerformanceMetrics } from '../types';
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }
    setIsSupported(true);
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(
        entry => entry.name === 'first-contentful-paint'
      );
      const lcp = performance.getEntriesByType(
        'largest-contentful-paint'
      )[0] as PerformanceNavigationTiming;
      const cls = performance
        .getEntriesByType('layout-shift')
        .reduce((acc, entry) => {
          return acc + (entry as any).value;
        }, 0);
      const fid = performance.getEntriesByType(
        'first-input'
      )[0] as PerformanceEventTiming;
import { useEffect, useState } from "react";
import { PerformanceMetrics } from "../types";

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function usePerformanceMetrics() {
:backup-problematic-files/hooks/usePerformanceMetrics.ts
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" |!("performance" in window)) {
      return;
    }
    setIsSupported(true);
    const measurePerformance = () => {
      const navigationEntries =
        window.performance.getEntriesByType("navigation");
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType("paint");
      const fcp = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint"
      );
      const lcpEntries = window.performance.getEntriesByType(
        "largest-contentful-paint"
      );
      const lcp = lcpEntries[0] as PerformanceEntry;
      const clsEntries = window.performance.getEntriesByType("layout-shift");
      const cls = clsEntries.reduce((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value;
      }, 0);
      const fidEntries = window.performance.getEntriesByType("first-input");
      const fid = fidEntries[0] as PerformanceEventTiming;
<<<<<<< HEAD
<<<<<<< HEAD



=======
<<<<<<< HEAD:hooks/usePerformanceMetrics.ts
=======

>>>>>>> main:hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/usePerformanceMetrics.ts
=======
:hooks/usePerformanceMetrics.ts

main:hooks/usePerformanceMetrics.ts
:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: cls
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
      });
<<<<<<< HEAD
<<<<<<< HEAD

    };

=======
<<<<<<< HEAD:hooks/usePerformanceMetrics.ts
=======
=======
:hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    };
:backup-problematic-files/hooks/usePerformanceMetrics.ts
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return { metrics, isSupported };
}
:hooks/usePerformanceMetrics.ts
import { useEffect, useState } from 'react',;
import { PerformanceMetrics } from '../types',;
export function usePerformanceMetrics() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),;
  const [isSupported, setIsSupported] = useState(false),;
  useEffect(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) {;
      return;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return { metrics, isSupported }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD:hooks/usePerformanceMetrics.ts
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
:hooks/usePerformanceMetrics.ts
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { metrics, isSupported };
<<<<<<< HEAD
<<<<<<< HEAD

}


=======
>>>>>>> main:hooks/usePerformanceMetrics.ts
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/usePerformanceMetrics.ts
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
main:hooks/usePerformanceMetrics.ts
}
:backup-problematic-files/hooks/usePerformanceMetrics.ts
:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
