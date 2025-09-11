import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
	fcp: number | null;
	lcp: number | null;
	fid: number | null;
	cls: number | null;
	ttfb: number | null;
	fmp: number | null;
}

interface PerformanceMonitorProps {
	onMetrics?: (metrics: PerformanceMetrics) => void;
	logToConsole?: boolean;
	sendToAnalytics?: boolean;
	analyticsEndpoint?: string;
}

export function PerformanceMonitor({
	onMetrics,
	logToConsole = false,
	sendToAnalytics = false,
	analyticsEndpoint = '/api/analytics/performance',
}: PerformanceMonitorProps) {
	const observerRef = useRef<PerformanceObserver | null>(null);
	const metricsRef = useRef<PerformanceMetrics>({
		fcp: null,
		lcp: null,
		fid: null,
		cls: null,
		ttfb: null,
		fmp: null,
	});

  // Measure First Contentful Paint (FCP)
  const measureFCP = () => {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');

    if (fcpEntry) {
      metricsRef.current.fcp = fcpEntry.startTime;
      if (logToConsole) {
        console.log('FCP:', fcpEntry.startTime, 'ms');
      }
    }
  };

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = () => {
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            metricsRef.current.lcp = lastEntry.startTime;
            if (logToConsole) {
              console.log('LCP:', lastEntry.startTime, 'ms');
            }
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

      } catch (error) {
        console.warn('LCP measurement failed:', error);
      }
    }
  };

  // Measure First Input Delay (FID)
  const measureFID = () => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'first-input') {
              // Use a safer way to measure FID
              const fid = entry.processingStart ? entry.processingStart - entry.startTime : 0;

              metricsRef.current.fid = fid;
              if (logToConsole) {
                console.log('FID:', fid, 'ms');
              }
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID measurement failed:', error);
      }
    }
  };

	// Measure Cumulative Layout Shift (CLS)
	const measureCLS = () => {
		if ('PerformanceObserver' in window) {
			try {
				let clsValue = 0;
				const observer = new PerformanceObserver((list) => {
					const entries = list.getEntries();
					entries.forEach((entry: any) => {
						if (!entry.hadRecentInput) {
							clsValue += entry.value;
						}
					});
					metricsRef.current.cls = clsValue;
					if (logToConsole) {
						console.log('CLS:', clsValue);
					}
				});
				observer.observe({ entryTypes: ['layout-shift'] });
			} catch (error) {
				console.warn('CLS measurement failed:', error);
			}
		}
	};

  // Measure Time to First Byte (TTFB)
  const measureTTFB = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;

      if (logToConsole) {
        console.log('TTFB:', metricsRef.current.ttfb, 'ms');
      }
    }
  };

	// Measure First Meaningful Paint (FMP) approximation
	const measureFMP = () => {
		setTimeout(() => {
			const paintEntries = performance.getEntriesByType('paint');
			const lastPaintEntry = paintEntries[paintEntries.length - 1];
			if (lastPaintEntry) {
				metricsRef.current.fmp = lastPaintEntry.startTime;
				if (logToConsole) {
					console.log('FMP (approximate):', lastPaintEntry.startTime, 'ms');
				}
			}
		}, 1000);
	};

	// Send metrics to analytics endpoint
	const sendMetricsToAnalytics = async (metrics: PerformanceMetrics) => {
		if (!sendToAnalytics) return;
		try {
			await fetch(analyticsEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					metrics,
					timestamp: Date.now(),
					userAgent: navigator.userAgent,
					url: window.location.href,
				}),
			});
		} catch (error) {
			console.warn('Failed to send performance metrics:', error);
		}
	};

	// Get performance grade based on metrics
	const getPerformanceGrade = (metrics: PerformanceMetrics): string => {
		let score = 0;
		let totalMetrics = 0;

		if (metrics.fcp !== null) {
			totalMetrics++;
			score += metrics.fcp < 1800 ? 100 : metrics.fcp < 3000 ? 75 : metrics.fcp < 4000 ? 50 : 25;
		}
		if (metrics.lcp !== null) {
			totalMetrics++;
			score += metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 75 : metrics.lcp < 6000 ? 50 : 25;
		}
		if (metrics.fid !== null) {
			totalMetrics++;
			score += metrics.fid < 100 ? 100 : metrics.fid < 300 ? 75 : metrics.fid < 500 ? 50 : 25;
		}
		if (metrics.cls !== null) {
			totalMetrics++;
			score += metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 75 : metrics.cls < 0.4 ? 50 : 25;
		}

		const averageScore = totalMetrics > 0 ? score / totalMetrics : 0;
		if (averageScore >= 90) return 'A';
		if (averageScore >= 80) return 'B';
		if (averageScore >= 70) return 'C';
		if (averageScore >= 60) return 'D';
		return 'F';
	};

	useEffect(() => {
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', () => {
				measureFCP();
				measureFMP();
			});
		} else {
			measureFCP();
			measureFMP();
		}

		measureLCP();
		measureFID();
		measureCLS();
		setTimeout(measureTTFB, 100);

		const sendMetricsTimer = setTimeout(() => {
			const metrics = metricsRef.current;
			const grade = getPerformanceGrade(metrics);
			if (logToConsole) {
				console.log('Performance Grade:', grade);
				console.log('All Metrics:', metrics);
			}
			if (onMetrics) {
				onMetrics(metrics);
			}
			sendMetricsToAnalytics(metrics);
		}, 5000);

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
			clearTimeout(sendMetricsTimer);
		};
	}, [onMetrics, logToConsole, sendToAnalytics, analyticsEndpoint]);

	// This component doesn't render anything
	return null;
}

// Hook for using performance monitoring
export function usePerformanceMonitoring(options?: Omit<PerformanceMonitorProps, 'onMetrics'>) {
	const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
	const [grade] = useState<string>('');

	const handleMetrics = (newMetrics: PerformanceMetrics) => {
		setMetrics(newMetrics);
	};

	return {
		metrics,
		grade,
		PerformanceMonitor: () => (
			<PerformanceMonitor
				{...options}
				onMetrics={handleMetrics}
			/>
		),
	};
}

// Utility function to get current performance metrics
export function getCurrentPerformanceMetrics(): PerformanceMetrics {
	const paintEntries = performance.getEntriesByType('paint');
	const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

	return {
		fcp: paintEntries.find(entry => (entry as PerformanceEntry).name === 'first-contentful-paint')?.startTime || null,
		lcp: null,
		fid: null,
		cls: null,
		ttfb: navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null,
		fmp: paintEntries[paintEntries.length - 1]?.startTime || null,
	};
}
