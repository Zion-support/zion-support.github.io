import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

interface PerformanceOptimizerProps {
	enableServiceWorker?: boolean;
	enableImageOptimization?: boolean;
	enableCodeSplitting?: boolean;
}

export default function PerformanceOptimizer({
	enableServiceWorker = true,
	enableImageOptimization = true,
	enableCodeSplitting = true
}: PerformanceOptimizerProps) {
	const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

	useEffect(() => {
		// Performance monitoring
		if (typeof window !== 'undefined') {
			const observer = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const metrics: any = {};
				
				entries.forEach((entry) => {
					if (entry.entryType === 'navigation') {
						metrics.loadTime = entry.loadEventEnd - entry.fetchStart;
						metrics.domContentLoaded = entry.domContentLoadedEventEnd - entry.fetchStart;
					}
				});
				
				setPerformanceMetrics(metrics);
			});
			
			observer.observe({ entryTypes: ['navigation'] });
		}

		// Service Worker registration
		if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js')
				.then((registration) => {
					console.log('Service Worker registered:', registration);
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error);
				});
		}
	}, [enableServiceWorker]);

	// Image optimization
	useEffect(() => {
		if (enableImageOptimization && typeof window !== 'undefined') {
			const images = document.querySelectorAll('img[data-src]');
			const imageObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target as HTMLImageElement;
						img.src = img.dataset.src || '';
						img.classList.remove('lazy');
						imageObserver.unobserve(img);
					}
				});
			});

			images.forEach((img) => imageObserver.observe(img));
		}
	}, [enableImageOptimization]);

	return (
		<div className="performance-optimizer">
			{performanceMetrics && (
				<div className="performance-metrics">
					<h3>Performance Metrics</h3>
					<p>Load Time: {Math.round(performanceMetrics.loadTime)}ms</p>
					<p>DOM Content Loaded: {Math.round(performanceMetrics.domContentLoaded)}ms</p>
				</div>
			)}
		</div>
	);
}