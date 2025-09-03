import Head from 'next/head';
import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
	pageName?: string;
	customEvents?: Array<{
		event: string;
		category: string;
		action?: string;
		label?: string;
		value?: number;
	}>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ pageName = 'Home', customEvents = [] }) => {
	useEffect(() => {
		const g = (window as any).gtag as undefined | ((...args: any[]) => void);
		g && g('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
			page_title: pageName,
			page_location: window.location.href,
		});

		customEvents.forEach(ev => {
			g && g('event', ev.event, {
				event_category: ev.category,
				event_label: ev.label,
				value: ev.value,
			});
		});
	}, [pageName, customEvents]);

	return (
		<Head>
			{/* Placeholder to ensure Head is rendered; actual GA scripts are injected by Analytics component */}
			<meta name="analytics-tracker" content="enabled" />
		</Head>
	);
};

export default AnalyticsTracker;