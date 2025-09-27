import { useEffect } from "react";

interface WebVitalsMetric {
	name: string;
	value: number;
	delta: number;
	id: string;
}

interface WebVitalsProps {
	onMetric?: (metric: WebVitalsMetric) => void;
}

export default function WebVitals({ onMetric }: WebVitalsProps) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const getCLS = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
			let clsValue = 0;
			let clsEntries: PerformanceEntry[] = [];
			let sessionValue = 0;
			let sessionEntries: PerformanceEntry[] = [];

			new PerformanceObserver((entryList) => {
				for (const entry of entryList.getEntries()) {
					if (!entry.hadRecentInput) {
						const firstSessionEntry = sessionEntries[0];
						const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

						if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
							sessionValue += entry.value;
							sessionEntries.push(entry);
						} else {
							sessionValue = entry.value;
							sessionEntries = [entry];
						}

						if (sessionValue > clsValue) {
							clsValue = sessionValue;
							clsEntries = [...sessionEntries];
						}
					}
				}

				onPerfEntry?.({
					name: 'CLS',
					value: clsValue,
					delta: clsValue,
					id: `cls-${Date.now()}`
				});
			}).observe({ type: 'layout-shift', buffered: true });
		};

		const getFID = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
			new PerformanceObserver((entryList) => {
				for (const entry of entryList.getEntries()) {
					onPerfEntry?.({
						name: 'FID',
						value: entry.processingStart - entry.startTime,
						delta: entry.processingStart - entry.startTime,
						id: `fid-${Date.now()}`
					});
				}
			}).observe({ type: 'first-input', buffered: true });
		};

		const getFCP = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
			new PerformanceObserver((entryList) => {
				for (const entry of entryList.getEntries()) {
					if (entry.name === 'first-contentful-paint') {
						onPerfEntry?.({
							name: 'FCP',
							value: entry.startTime,
							delta: entry.startTime,
							id: `fcp-${Date.now()}`
						});
					}
				}
			}).observe({ type: 'paint', buffered: true });
		};

		const getLCP = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
			new PerformanceObserver((entryList) => {
				const entries = entryList.getEntries();
				const lastEntry = entries[entries.length - 1];
				onPerfEntry?.({
					name: 'LCP',
					value: lastEntry.startTime,
					delta: lastEntry.startTime,
					id: `lcp-${Date.now()}`
				});
			}).observe({ type: 'largest-contentful-paint', buffered: true });
		};

		const getTTFB = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
			new PerformanceObserver((entryList) => {
				for (const entry of entryList.getEntries()) {
					if (entry.entryType === 'navigation') {
						onPerfEntry?.({
							name: 'TTFB',
							value: entry.responseStart - entry.fetchStart,
							delta: entry.responseStart - entry.fetchStart,
							id: `ttfb-${Date.now()}`
						});
					}
				}
			}).observe({ type: 'navigation', buffered: true });
		};

		// Initialize all metrics
		getCLS(onMetric);
		getFID(onMetric);
		getFCP(onMetric);
		getLCP(onMetric);
		getTTFB(onMetric);
	}, [onMetric]);

	return null; // This component doesn't render anything
}