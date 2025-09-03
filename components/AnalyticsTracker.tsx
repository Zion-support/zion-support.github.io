import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
	pageName?: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ pageName = 'Home' }) => {
	useEffect(() => {
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', 'page_view', {
				page_title: pageName,
				page_location: window.location.href,
			});
		}
	}, [pageName]);

	return null;
};

export default AnalyticsTracker;