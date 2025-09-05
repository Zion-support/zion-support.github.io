import React from 'react',
import SEO from '../components/SEO',
export default function EventsPage() {
	return (		<>
			<SEO title=&quot;Events | Zion Tech Group&quot; description=&quot;Upcoming events and conferences.&quot; canonical=&quot;/events&quot; />
			<div className=&quot;container mx-auto px-4 py-16&quot;>
				<h1 className=&quot;text-4xl font-bold mb-4&quot;>Events</h1>
				<p className=&quot;text-gray-300&quot;>No upcoming events at this time. Check back soon.</p>
			</div>
		</>
	)
}