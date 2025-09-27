
import { useEffect, useCallback } from 'react';

declare global {
	interface Window {
		gtag: (...args: any[]) => void;
		dataLayer: any[];
	}
}

export function useAnalytics() {
	useEffect(() => {
		// Initialize gtag
		(window as any).dataLayer = (window as any).dataLayer || [];
		function gtag(...args: any[]) {
			(window as any).dataLayer.push(args);
		}
		(window as any).gtag = gtag;

		gtag("js", new Date());
		gtag("config", "GA_MEASUREMENT_ID", {
			page_title: document.title,
			page_location: window.location.href});
	}, []);

	const trackClick = useCallback((action: string, category: string, label?: string, value?: number) => {
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', action, {
				event_category: category,
				event_label: label,
				value: value});
		}
	}, []);

	const trackPageView = useCallback((page_path: string, page_title?: string) => {
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('config', 'GA_MEASUREMENT_ID', {
				page_path,
				page_title: page_title || document.title});
		}
	}, []);

	const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', eventName, parameters);
		}
	}, []);

	return {
		trackClick,
		trackPageView,
		trackCustomEvent};
}

export function usePageView(pageName: string) {
	useEffect(() => {
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', 'page_view', {
				page_title: pageName,
				page_location: window.location.href});
		}
	}, [pageName]);
}

