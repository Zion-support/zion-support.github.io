import React, { useEffect } from 'react';

export default function PerformanceOptimizer(): JSX.Element | null {
	useEffect(() => {
		if (typeof window === 'undefined' || !('performance' in window)) {
			return;
		}
		try {
			// Prefetch a few likely-used routes/assets without blocking
			const linkRelList = [
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
				{ rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
			];
			linkRelList.forEach((cfg) => {
				const link = document.createElement('link');
				Object.assign(link, cfg);
				document.head.appendChild(link);
			});

			// Basic Web Vitals logging (no-op if PerformanceObserver not supported)
			if ('PerformanceObserver' in window) {
				const vitalsObserver = new PerformanceObserver((list) => {
					for (const entry of list.getEntries()) {
						if (entry.entryType === 'largest-contentful-paint') {
							console.debug('[LCP]', Math.round(entry.startTime));
						}
						if ((entry as any).name === 'first-input') {
							const e: any = entry;
							console.debug('[FID]', Math.round(e.processingStart - e.startTime));
						}
						if (entry.entryType === 'layout-shift') {
							const e: any = entry;
							if (!e.hadRecentInput) {
								console.debug('[CLS]', e.value);
							}
						}
					}
				});
				try {
					vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] as any });
				} catch {
					/* ignore */
				}
			}
		} catch {
			// Best-effort only
		}
	}, []);

	return null;
}

