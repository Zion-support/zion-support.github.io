import React from 'react';
import SEO from '../components/SEO';

export default function WebinarsPage() {
	return (
		<>
			<SEO title=&quot;Webinars | Zion Tech Group&quot; description=&quot;Upcoming webinars and on-demand sessions.&quot; canonical=&quot;/webinars&quot; />
			<div className=&quot;container mx-auto px-4 py-16&quot;>
				<h1 className=&quot;text-4xl font-bold mb-4&quot;>Webinars</h1>
				<p className=&quot;text-gray-300&quot;>No upcoming webinars at this time. Check back soon.</p>
			</div>
		</>
	);
}
