import React, { useCallback, useEffect } from 'react';

const AnalyticsManager: React.FC = () => {
	const trackPageView = useCallback(() => {
		const g = (window as any).gtag as undefined | ((...args: any[]) => void);
		g && g('event', 'page_view', {
			page_title: document.title,
			page_location: window.location.href,
		});
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		trackPageView();
		const onPopState = () => trackPageView();
		window.addEventListener('popstate', onPopState);
		return () => window.removeEventListener('popstate', onPopState);
	}, [trackPageView]);

	return null;
};

export default AnalyticsManager;