import { useEffect } from "react";

interface WebVitalsMetric {
	name: string;
	value: number;
	delta: number;
	id: string;
	navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
	// Send to analytics service
	if (typeof window !== "undefined" && "gtag" in window) {
		(window as any).gtag("event", metric.name, {
			event_category: "Web Vitals",
			event_label: metric.id,
			value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
			non_interaction: true,
		});
	}

	// Log to console in development
	if (process.env.NODE_ENV === "development") {
		console.log(metric);
	}
}

export default function WebVitals() {
	useEffect(() => {
		// Only run in browser
		if (typeof window === "undefined") {
			return;
		}

		// Import web-vitals dynamically to avoid SSR issues
		import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(reportWebVitals);
			getFID(reportWebVitals);
			getFCP(reportWebVitals);
			getLCP(reportWebVitals);
			getTTFB(reportWebVitals);
		});
	}, []);

	return null; // This component doesn't render anything
}