import React, { useEffect } from 'react';

interface AnalyticsProps {
	trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID }) => {
	useEffect(() => {
		if (!trackingId || typeof window === 'undefined') return;

		const script1 = document.createElement('script');
		script1.async = true;
		script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
		document.head.appendChild(script1);

		const script2 = document.createElement('script');
		script2.innerHTML = `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);} 
			gtag('js', new Date());
			gtag('config', '${trackingId}', {
				page_title: document.title,
				page_location: window.location.href,
				send_page_view: true
			});
		`;
		document.head.appendChild(script2);

		const handleRouteChange = () => {
			const g = (window as any).gtag as undefined | ((...args: any[]) => void);
			g && g('config', trackingId, {
				page_title: document.title,
				page_location: window.location.href,
			});
		};

		window.addEventListener('popstate', handleRouteChange);
		return () => window.removeEventListener('popstate', handleRouteChange);
	}, [trackingId]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const onLoad = () => {
			if ('performance' in window) {
				const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
				if (nav) {
					const loadTime = nav.loadEventEnd - nav.fetchStart;
					const g = (window as any).gtag as undefined | ((...args: any[]) => void);
					g && g('event', 'page_load_time', {
						event_category: 'Performance',
						event_label: 'Page Load',
						value: Math.round(loadTime)
					});
				}
			}
		};
		window.addEventListener('load', onLoad);
		return () => window.removeEventListener('load', onLoad);
	}, []);

	return null;
};

export default Analytics;

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
	const g = (window as any).gtag as undefined | ((...args: any[]) => void);
	g && g('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
};

export const trackPageView = (url: string, title: string) => {
	const g = (window as any).gtag as undefined | ((...args: any[]) => void);
	g && g('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
		page_title: title,
		page_location: url,
	});
};