import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

interface PerformanceOptimizerProps {
	enableServiceWorker?: boolean;
	enableMonitoring?: boolean;
	enableResourceHints?: boolean;
	enablePreloading?: boolean;
}

function PerformanceOptimizerComponent({
	enableServiceWorker = true,
	enableMonitoring = true,
	enableResourceHints = true,
	enablePreloading = true
}: PerformanceOptimizerProps): null {
	const [memoryUsage, setMemoryUsage] = useState<{
		used: number;
		total: number;
		percentage: number;
	} | null>(null);

	useEffect(() => {
		// Only run in browser
		if (typeof window === "undefined") {
			return;
		}

		// Performance monitoring
		if (enableMonitoring) {
			const updateMemoryUsage = () => {
				if ('memory' in performance) {
					const memory = (performance as any).memory;
					setMemoryUsage({
						used: memory.usedJSHeapSize,
						total: memory.totalJSHeapSize,
						percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
					});
				}
			};

			updateMemoryUsage();
			const interval = setInterval(updateMemoryUsage, 5000);

			return () => clearInterval(interval);
		}

		// Resource hints
		if (enableResourceHints) {
			const addResourceHint = (href: string, as: string) => {
				const link = document.createElement('link');
				link.rel = 'preload';
				link.href = href;
				link.as = as;
				document.head.appendChild(link);
			};

			// Preload critical resources
			addResourceHint('/fonts/inter.woff2', 'font');
			addResourceHint('/images/hero-bg.jpg', 'image');
		}

		// Preloading
		if (enablePreloading) {
			const preloadImage = (src: string) => {
				const img = new Image();
				img.src = src;
			};

			// Preload critical images
			preloadImage('/images/og-image.jpg');
		}

		// Service Worker registration
		if (enableServiceWorker && 'serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js')
				.then((registration) => {
					console.log('Service Worker registered:', registration);
				})
				.catch((error) => {
					console.log('Service Worker registration failed:', error);
				});
		}

	}, [enableServiceWorker, enableMonitoring, enableResourceHints, enablePreloading]);

	// Log performance metrics
	useEffect(() => {
		if (memoryUsage) {
			console.log('Memory Usage:', {
				used: `${(memoryUsage.used / 1024 / 1024).toFixed(2)} MB`,
				total: `${(memoryUsage.total / 1024 / 1024).toFixed(2)} MB`,
				percentage: `${memoryUsage.percentage.toFixed(2)}%`
			});
		}
	}, [memoryUsage]);

	return null; // This component doesn't render anything
}

// Export as dynamic component to avoid SSR issues
export default dynamic(() => Promise.resolve(PerformanceOptimizerComponent), {
	ssr: false
});